type FormatTextWithBreaksProps = {
  content?: string;
  delimiter?: string;
};

export const formatTextWithBreaks = ({ content, delimiter = '\n' }: FormatTextWithBreaksProps): string | null => {
  if (!content) return null;

  return content.split(delimiter).map(line => `<p>${line}</p>`).join('');
};
