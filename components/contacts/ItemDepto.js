export default function ItemDepto({ item }) {
  return (
    <div className="flex flex-col  items-center align-top h-full">
      <p className="mb-4 text-pink-700 font-extrabold text-lg md:text-2xl">{item.name}</p>
      {item.telephone != undefined && (
        <p className="text-sm">
          <strong>Tel: </strong>
          {item.telephone}
        </p>
      )}
      {item.phone != undefined && (
        <p className="text-sm">
          <strong>Cel: </strong>
          {item.phone}
        </p>
      )}
      {item.addresses.map((address, index) =>
        item.addresses.length > 1 ? (
          <p className={index === 0 ? 'mt-4 text-sm text-center' : 'mt-2 text-sm text-center'}>
            <strong>{`(${index + 1})`}</strong> {address}
          </p>
        ) : (
          <p className={index === 0 ? 'mt-4 text-sm text-center' : 'mt-2 text-sm text-center'}>
            {address}
          </p>
        )
      )}
      {item.email != undefined && (
        <div className=" h-full flex items-end">
          <p className="mt-4 text-sm flex ">
            <strong>{item.email}</strong>
          </p>
        </div>
      )}
    </div>
  )
}
