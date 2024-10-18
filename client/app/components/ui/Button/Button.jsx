
const Button = ({title}) => {
  return (
    <button className="relative z-10 uppercase text-3xl py-4 px-6 border rounded-tl-[50px] rounded-br-[50px] transition-all duration-300 ease-in-out hover:rounded-tr-[50px] hover:rounded-bl-[50px] hover:rounded-tl-none hover:rounded-br-none">{ title}</button>
  )
}

export default Button