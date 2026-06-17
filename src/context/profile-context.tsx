'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export interface Profile {
  id: number;
  name: string;
  password?: string;
}

interface ProfileContextType {
  currentProfile: Profile | null;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  changePassword: (newPassword: string) => Promise<{ success: boolean; error?: string }>;
  profiles: Profile[];
  isLoading: boolean;
  error: string | null;
  refreshProfiles: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const DEFAULT_PROFILES: Profile[] = [
  { id: 1, name: 'Angga', password: 'seibi' },
  { id: 2, name: 'Dean', password: 'seibi' },
  { id: 3, name: 'Rian', password: 'seibi' },
  { id: 4, name: 'Agus', password: 'seibi' },
  { id: 5, name: 'Sandriya', password: 'seibi' },
];

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [profiles, setProfiles] = useState<Profile[]>(DEFAULT_PROFILES);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch profiles from Supabase
  const refreshProfiles = async () => {
    if (!isSupabaseConfigured) {
      // In offline mode, check localStorage for custom passwords
      const storedProfiles = localStorage.getItem('jidousha_mock_profiles');
      if (storedProfiles) {
        try {
          setProfiles(JSON.parse(storedProfiles));
        } catch (e) {
          setProfiles(DEFAULT_PROFILES);
        }
      } else {
        setProfiles(DEFAULT_PROFILES);
      }
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('id, name, password')
        .order('name', { ascending: true });

      if (fetchError) {
        throw fetchError;
      }

      if (data && data.length > 0) {
        setProfiles(data.map(p => ({ 
          id: Number(p.id), 
          name: p.name,
          password: p.password 
        })));
      } else {
        setProfiles(DEFAULT_PROFILES);
      }
    } catch (err: any) {
      console.error('Failed to fetch profiles from Supabase:', err);
      setError(err.message || 'Error fetching profiles');
      setProfiles(DEFAULT_PROFILES);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshProfiles();
    
    const saved = localStorage.getItem('jidousha_current_profile');
    if (saved) {
      try {
        setCurrentProfile(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved profile', e);
      }
    }
  }, []);

  const login = async (username: string, passwordInput: string): Promise<{ success: boolean; error?: string }> => {
    // Force refresh profiles list to make sure we have latest credentials
    await refreshProfiles();

    const normalizedUser = username.trim().toLowerCase();
    const user = profiles.find(p => p.name.toLowerCase() === normalizedUser);

    if (!user) {
      return { success: false, error: 'Username not found' };
    }

    const storedPassword = user.password || 'seibi';
    if (storedPassword !== passwordInput) {
      return { success: false, error: 'Incorrect password' };
    }

    // Login successful
    setCurrentProfile(user);
    localStorage.setItem('jidousha_current_profile', JSON.stringify(user));
    return { success: true };
  };

  const logout = () => {
    setCurrentProfile(null);
    localStorage.removeItem('jidousha_current_profile');
  };

  const changePassword = async (newPassword: string): Promise<{ success: boolean; error?: string }> => {
    if (!currentProfile) {
      return { success: false, error: 'No user is logged in' };
    }

    if (!newPassword || newPassword.trim().length < 4) {
      return { success: false, error: 'Password must be at least 4 characters long' };
    }

    if (isSupabaseConfigured) {
      try {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ password: newPassword })
          .eq('id', currentProfile.id);

        if (updateError) throw updateError;
      } catch (err: any) {
        console.error('Failed to update password in Supabase:', err);
        return { success: false, error: err.message || 'Failed to change password in database' };
      }
    } else {
      // Mock mode: update profiles in localStorage
      const updatedProfiles = profiles.map(p => 
        p.id === currentProfile.id ? { ...p, password: newPassword } : p
      );
      setProfiles(updatedProfiles);
      localStorage.setItem('jidousha_mock_profiles', JSON.stringify(updatedProfiles));
    }

    // Update current profile session
    const updatedProfile = { ...currentProfile, password: newPassword };
    setCurrentProfile(updatedProfile);
    localStorage.setItem('jidousha_current_profile', JSON.stringify(updatedProfile));
    
    return { success: true };
  };

  return (
    <ProfileContext.Provider
      value={{
        currentProfile,
        login,
        logout,
        changePassword,
        profiles,
        isLoading,
        error,
        refreshProfiles,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
