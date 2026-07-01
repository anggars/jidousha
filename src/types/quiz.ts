export interface Question {
  id: number;
  question_jp: string;
  question_id: string;
  question_en: string;
  options_jp: string[];
  options_id: string[];
  options_en: string[];
  option_images: string[] | null;
  correct_index: number;
  explanation_jp: string;
  explanation_id: string;
  explanation_en: string;
  image_url: string | null;
  category: string;
}
