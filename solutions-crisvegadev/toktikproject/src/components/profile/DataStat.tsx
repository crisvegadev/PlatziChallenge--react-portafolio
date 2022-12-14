const DataStat = ({ data, label }: {
  data: string,
  label: string
}) => {
  return (
    <div className="flex flex-col text-center">
      <span className="font-bold text-sm">{data}</span>
      <span className="text-gray-700 text-xs">{label}</span>
    </div>
  )
}

export default DataStat
