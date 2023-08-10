class Utils {
  /**
   * @method getCompleteDate
   * @returns {Array} [Dia, Mes, Año] - Ejemplo [10, "Agosto", 2023]
   */
  getCompleteDate = () => {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth();
    const anioActual = fechaActual.getFullYear();

    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return [diaActual, meses[mesActual], anioActual];
  };
}

export default new Utils();
