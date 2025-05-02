export const formatInfoTitle = (title: string) =>
  title
    ? title
        // вставляем пробел перед заглавной буквой
        .replace(/([A-Z])/g, ' $1')
        // делаем первую букву заглавной
        .replace(/^./, (c) => c.toUpperCase())
    : '';
