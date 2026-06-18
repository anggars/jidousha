'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  en: {
    dashboard: "Dashboard",
    practice: "Practice",
    leaderboard: "Leaderboard",
    guestMode: "Guest Mode",
    playAsGuest: "Play as Guest",
    signIn: "Sign In",
    username: "Username",
    password: "Password",
    enterUsername: "Enter your username",
    enterPassword: "Enter your password",
    signingIn: "Signing in...",
    credentialsDesc: "Enter your credentials to access your dashboard.",
    portalDesc: "Automobile Maintenance Evaluation Practice Portal",
    nextQuestion: "Next Question",
    submitPractice: "Submit Practice",
    passed: "Passed",
    needsPractice: "Needs Practice",
    sessionCompleted: "Practice Session Completed",
    sessionDesc: "You have finished practicing the SSW Jidousha Seibi questions.",
    finalScore: "Final Score",
    totalQuestions: "Total Questions",
    correct: "Correct",
    incorrect: "Incorrect",
    goToDashboard: "Go to Dashboard",
    practiceAgain: "Practice Again",
    requestAccess: "Request Full Access via Telegram",
    guestEndMsg: "You have reached the end of the Guest Mode preview (5 questions).",
    contactAdminMsg: "Please contact the admin via Telegram to unlock all 49 questions!",
    detailedReview: "Detailed Question Review",
    question: "Question",
    yourAnswer: "Your Answer",
    explanation: "Explanation",
    show: "Show",
    hide: "Hide",
    noData: "No data available.",
    recentHistory: "Recent History",
    historyDesc: "Your recent practice session scores.",
    date: "Date",
    score: "Score",
    questions: "Questions",
    performanceOverview: "Performance Overview",
    totalExams: "Total Exams",
    averageScore: "Average Score",
    highestScore: "Highest Score",
    settings: "Settings",
    changePassword: "Change Password",
    newPassword: "New Password",
    saveChanges: "Save Changes",
    saving: "Saving...",
    signOut: "Sign Out",
    welcome: "Welcome back",
    topPlayers: "Top Players",
    timeline: "Timeline",
    leaderboardActivities: "Leaderboard & Activities",
    leaderboardDesc: "Compare average scores and track the recent practice activities of all team members.",
    leaderboardRankings: "Leaderboard rankings",
    recentActivities: "Recent activities",
    noTimelineData: "No timeline data available.",
    answeredCorrectly: "Answered correctly",
    dashboardActivities: "Recent Practice History",
    dashboardActivitiesDesc: "Your recent scores and performance over time.",
    changePasswordDesc: "Update your password to keep your account secure.",
    you: "You",
    loading: "Loading statistics...",
    examsCompleted: "Exams completed",
    avgCorrectness: "Average correctness",
    accuracyRate: "Answer accuracy rate",
    practiceSession: "Practice Exam Session",
    practiceSessionDesc: "Start a practice exam. Loads all available questions from the database in sequential order.",
    practiceNote: "Note: Answer key explanations will appear instantly after selecting, and a final review is available upon completion.",
    startPractice: "Start Practice Session",
    minChars: "At least 4 characters",
    cancel: "Cancel",
    correctOf: "Correct",
    of: "of",
    generatingPractice: "Generating practice session...",
    noQuestions: "No Questions Available",
    noQuestionsDesc: "No questions found matching your selection.",
    backToDashboard: "Back to Dashboard",
    questionNum: "Question",
    pageTitle: "Jidousha Seibi Practice",
    pageDesc: "Platform for practicing Japan's Tokutei Ginou SSW Jidousha Seibi (Automobile Maintenance & Repair) exam questions.",
    selectPackageDesc: "Choose the practice package you want to take. The Selected package contains curated questions and summaries, while Regular contains 102 unique questions.",
    packageSelectedTitle: "Selected Package",
    packageSelectedDesc: "49 frequently tested summary questions",
    startSelected: "Start Selected",
    packageRegularTitle: "Regular Package",
    packageRegularDesc: "102 complete questions without duplicates",
    startRegular: "Start Regular",
  },
  id: {
    dashboard: "Dasbor",
    practice: "Latihan",
    leaderboard: "Peringkat",
    guestMode: "Mode Tamu",
    playAsGuest: "Main sebagai Tamu",
    signIn: "Masuk",
    username: "Nama Pengguna",
    password: "Kata Sandi",
    enterUsername: "Masukkan nama pengguna",
    enterPassword: "Masukkan kata sandi",
    signingIn: "Masuk...",
    credentialsDesc: "Masukkan kredensial untuk mengakses dasbor Anda.",
    portalDesc: "Portal Latihan Ujian Perawatan Mobil",
    nextQuestion: "Soal Berikutnya",
    submitPractice: "Selesaikan Latihan",
    passed: "Lulus",
    needsPractice: "Perlu Latihan",
    sessionCompleted: "Sesi Latihan Selesai",
    sessionDesc: "Anda telah menyelesaikan latihan soal SSW Jidousha Seibi.",
    finalScore: "Skor Akhir",
    totalQuestions: "Total Soal",
    correct: "Benar",
    incorrect: "Salah",
    goToDashboard: "Ke Dasbor",
    practiceAgain: "Latihan Lagi",
    requestAccess: "Minta Akses Penuh via Telegram",
    guestEndMsg: "Anda telah mencapai akhir pratinjau Mode Tamu (5 soal).",
    contactAdminMsg: "Silakan hubungi admin via Telegram untuk membuka semua 49 soal!",
    detailedReview: "Ulasan Detail Soal",
    question: "Soal",
    yourAnswer: "Jawaban Anda",
    explanation: "Penjelasan",
    show: "Tampil",
    hide: "Sembunyi",
    noData: "Tidak ada data.",
    recentHistory: "Riwayat Terakhir",
    historyDesc: "Skor sesi latihan terakhir Anda.",
    date: "Tanggal",
    score: "Skor",
    questions: "Soal",
    performanceOverview: "Ringkasan Performa",
    totalExams: "Total Ujian",
    averageScore: "Skor Rata-rata",
    highestScore: "Skor Tertinggi",
    settings: "Pengaturan",
    changePassword: "Ganti Kata Sandi",
    newPassword: "Kata Sandi Baru",
    saveChanges: "Simpan Perubahan",
    saving: "Menyimpan...",
    signOut: "Keluar",
    welcome: "Selamat datang kembali",
    topPlayers: "Pemain Terbaik",
    timeline: "Riwayat",
    leaderboardActivities: "Peringkat & Aktivitas",
    leaderboardDesc: "Bandingkan skor rata-rata dan pantau aktivitas latihan terbaru dari semua anggota tim.",
    leaderboardRankings: "Peringkat Kelas",
    recentActivities: "Aktivitas terbaru",
    noTimelineData: "Tidak ada data riwayat.",
    answeredCorrectly: "Menjawab dengan benar",
    dashboardActivities: "Riwayat Latihan Terakhir",
    dashboardActivitiesDesc: "Skor dan performa latihan terakhir Anda.",
    changePasswordDesc: "Perbarui kata sandi Anda untuk menjaga keamanan akun.",
    you: "Anda",
    loading: "Memuat statistik...",
    examsCompleted: "Ujian selesai",
    avgCorrectness: "Rata-rata kebenaran",
    accuracyRate: "Tingkat akurasi",
    practiceSession: "Sesi Ujian Latihan",
    practiceSessionDesc: "Mulai ujian latihan. Memuat semua soal yang tersedia dari database secara berurutan.",
    practiceNote: "Catatan: Penjelasan kunci jawaban akan muncul instan setelah memilih, dan ulasan akhir tersedia setelah ujian selesai.",
    startPractice: "Mulai Sesi Latihan",
    minChars: "Minimal 4 karakter",
    cancel: "Batal",
    correctOf: "Benar",
    of: "dari",
    generatingPractice: "Membuat sesi latihan...",
    noQuestions: "Tidak Ada Soal",
    noQuestionsDesc: "Tidak ada soal yang sesuai dengan pilihan Anda.",
    backToDashboard: "Kembali ke Dasbor",
    questionNum: "Soal",
    pageTitle: "Latihan Soal SSW Jidousha Seibi",
    pageDesc: "Platform latihan soal ujian Tokutei Ginou SSW Jidousha Seibi (Perbaikan & Pemeliharaan Otomotif) Jepang.",
    selectPackageDesc: "Pilih paket latihan yang ingin Anda kerjakan. Paket Selected berisi soal-soal terpilih dan ringkasan, sedangkan Reguler berisi 102 soal tanpa duplikat.",
    packageSelectedTitle: "Paket Selected",
    packageSelectedDesc: "49 soal ringkasan yang sering muncul",
    startSelected: "Mulai Selected",
    packageRegularTitle: "Paket Reguler",
    packageRegularDesc: "102 soal lengkap tanpa duplikat",
    startRegular: "Mulai Reguler",
  }
};

export type TranslationKey = keyof typeof translations.en;

type LanguageContextType = {
  globalLang: 'en' | 'id';
  setGlobalLang: (lang: 'en' | 'id') => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [globalLang, setGlobalLang] = useState<'en' | 'id'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('global_lang');
    if (savedLang === 'en' || savedLang === 'id') {
      setGlobalLang(savedLang);
    }
  }, []);

  const changeLang = (lang: 'en' | 'id') => {
    setGlobalLang(lang);
    localStorage.setItem('global_lang', lang);
  };

  useEffect(() => {
    document.title = translations[globalLang].pageTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', translations[globalLang].pageDesc);
  }, [globalLang]);

  const t = (key: TranslationKey) => {
    return translations[globalLang][key];
  };

  return (
    <LanguageContext.Provider value={{ globalLang, setGlobalLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
