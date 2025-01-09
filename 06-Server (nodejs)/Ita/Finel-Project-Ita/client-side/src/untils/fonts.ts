// fonts.ts - place this in src/utils/fonts.ts or similar location
import { jsPDF } from 'jspdf';

// Update import paths to match your project structure
import rubikRegularUrl from '../fonts/Rubik-Regular.ttf';
import rubikBoldUrl from '../fonts/Rubik-Bold.ttf';

// Function to fetch and convert font to base64
async function fetchFontAsBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // Remove data URL prefix (data:font/ttf;base64,)
      const base64 = reader.result as string;
      const base64Data = base64.split(',')[1];
      resolve(base64Data);
    };
    reader.readAsDataURL(blob);
  });
}

// Initialize fonts for jsPDF
export async function initializePDFFonts(doc: jsPDF) {
  try {
    // Fetch and convert fonts to base64
    const [rubikRegular, rubikBold] = await Promise.all([
      fetchFontAsBase64(rubikRegularUrl),
      fetchFontAsBase64(rubikBoldUrl)
    ]);

    // Add fonts to PDF document
    doc.addFileToVFS('Rubik-Regular.ttf', rubikRegular);
    doc.addFileToVFS('Rubik-Bold.ttf', rubikBold);
    
    // Register fonts with jsPDF
    doc.addFont('Rubik-Regular.ttf', 'Rubik', 'normal');
    doc.addFont('Rubik-Bold.ttf', 'Rubik', 'bold');
    
    // Set default font
    doc.setFont('Rubik', 'normal');
    
    return true;
  } catch (error) {
    console.error('Error initializing fonts:', error);
    return false;
  }
}