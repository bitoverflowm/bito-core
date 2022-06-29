import { useRouter } from "next/router";
import { BsArrow90DegLeft } from 'react-icons/bs' 

const BackArrow = () => {
    const router = useRouter()

    return (
        <BsArrow90DegLeft onClick={() => router.back()}/>
    )
}


export default BackArrow;