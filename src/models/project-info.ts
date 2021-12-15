export interface ProjectInfo {
  id: number
  name: string;
  date?: number;
  preview?: string;
  loadPreview: boolean;
  client?: string;
  scope?: string[];
  description?: string;
}
