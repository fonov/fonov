import jsPDF from 'jspdf';
import type { RatingValue } from '@/store/useAppStore';

interface ReportData {
  model: string;
  color: string;
  conclusion: { title: string; text: string; type: string };
  testResults: { title: string; status: string; detail?: string }[];
  generatedAt: string;
}

export function generatePdfReport(data: ReportData): void {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  doc.setFontSize(18);
  doc.text('FonovTest Report', margin, y);
  y += 12;

  doc.setFontSize(11);
  doc.text(`Model: ${data.model}`, margin, y);
  y += 7;
  doc.text(`Color: ${data.color}`, margin, y);
  y += 7;
  doc.text(`Date: ${data.generatedAt}`, margin, y);
  y += 14;

  doc.setFontSize(14);
  doc.text(data.conclusion.title, margin, y);
  y += 10;

  doc.setFontSize(10);
  const conclusionLines = doc.splitTextToSize(data.conclusion.text, 170);
  doc.text(conclusionLines, margin, y);
  y += conclusionLines.length * 5 + 10;

  doc.setFontSize(12);
  doc.text('Test Results:', margin, y);
  y += 8;

  doc.setFontSize(9);
  for (const result of data.testResults) {
    if (y > 270) {
      doc.addPage();
      y = margin;
    }
    doc.text(`${result.status} ${result.title}`, margin, y);
    y += 5;
    if (result.detail) {
      const lines = doc.splitTextToSize(result.detail, 165);
      doc.setTextColor(100);
      doc.text(lines, margin + 5, y);
      doc.setTextColor(0);
      y += lines.length * 4 + 3;
    }
  }

  doc.save(`fonovtest-${data.model.replace(/\s+/g, '-')}-${Date.now()}.pdf`);
}

export function buildTestResults(
  ratings: Record<string, RatingValue>,
  ratingMeta: Record<string, { title: string; pass?: boolean; warning?: string }>
) {
  return Object.entries(ratings).map(([key, value]) => {
    const meta = ratingMeta[key];
    if ('check' in value) {
      const passed = value.check === (meta?.pass ?? true);
      return {
        title: meta?.title ?? key,
        status: passed ? '✓' : '✗',
        detail: !passed ? meta?.warning : undefined,
      };
    }
    const stars = value as { firstStars: number; secondStars: number };
    return {
      title: meta?.title ?? key,
      status: `${stars.firstStars}/${stars.secondStars} ★`,
    };
  });
}
