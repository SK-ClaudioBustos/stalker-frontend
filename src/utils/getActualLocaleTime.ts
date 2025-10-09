export const getActualLocaleTime = (time: string) => {
  const dateTime = new Date(time);
  // Opciones para asegurar el formato de 2 dígitos (hh:mm)
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit", // '08' o '15'
    minute: "2-digit", // '05' o '30'
    hour12: false, // Formato de 24 horas (opcional, pero recomendado para hh:mm)
  };

  // Convierte la hora a la cadena con las opciones definidas
  const timeString = dateTime.toLocaleTimeString("es-ES", options);

  return timeString;
};
