import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faBan, 
    faCircleNotch, 
    faPlusSquare 
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faBan, faCircleNotch, faPlusSquare);
};

export default Icons;