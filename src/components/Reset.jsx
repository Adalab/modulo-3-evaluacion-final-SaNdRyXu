function ResetFilters({ preset }) {
  return (
    <div className="reset-filters">
      <button className="button" onClick={preset} >
        🧹 Limpiar filtros
      </button>
    </div>
  );
}
export default ResetFilters;
