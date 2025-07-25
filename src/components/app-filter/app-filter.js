import "./app-filter.css";

const AppFilter = (props) => {
  // добавить кнопку филтрации хочешь? пиши ее сюда! поменять ее филтры иди в app.js в в switch case!
  const buttonsData = [
    { name: 'all', label: 'все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' }
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
    <button type="button"
      className={`btn ${clazz}`}
      key={name}
      onClick={() => props.onFilterSelect(name)}>
      {label}
    </button>
    )
  })

return (
  <div className="btn-group">
    {buttons}
  </div>
)
}

export default AppFilter;