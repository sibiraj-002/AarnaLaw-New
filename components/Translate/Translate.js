// import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
// import { useState } from 'react'

// const people = [
//   { id: 1, name: 'English' },
//   { id: 2, name: 'Spanish' },
//   { id: 3, name: 'French' },
//   { id: 4, name: 'German' },
//   { id: 5, name: 'Chinese' },
// ]

// const Translate = () => {
//   const [selectedPerson, setSelectedPerson] = useState(people[0])
//   const [query, setQuery] = useState('')

//   const filteredPeople =
//     query === ''
//       ? people
//       : people.filter((person) => {
//           return person.name.toLowerCase().includes(query.toLowerCase())
//         })

//   return (
//     <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
//       <ComboboxInput
//         aria-label="Assignee"
//         displayValue={(person) => person?.name}
//         onChange={(event) => setQuery(event.target.value)}
//       />
//       <ComboboxOptions anchor="bottom" className="border empty:invisible">
//         {filteredPeople.map((person) => (
//           <ComboboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100">
//             {person.name}
//           </ComboboxOption>
//         ))}
//       </ComboboxOptions>
//     </Combobox>
//   )
// }

// export default Translate;