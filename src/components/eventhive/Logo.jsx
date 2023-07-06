import { Link } from 'react-router-dom'
import PurpleText from './PurpleText'

const Logo = ({ size, color }) => {
  return (
    <Link
      to="/eventhive"
      className={`font-semibold ${size ? size : 'text-[40px]'} ${
        color ? color : 'text-black'
      }`}
    >
      Event <PurpleText text="Hive" />
    </Link>
  )
}

export default Logo
