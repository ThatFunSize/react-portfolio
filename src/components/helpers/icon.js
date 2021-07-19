import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faBan,
  faCircleNotch,
  faPlusSquare,
  faSignInAlt,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faBan,
    faCircleNotch,
    faPlusSquare,
    faSignInAlt,
    faPhoneSquareAlt,
    faEnvelopeSquare,
    faMapMarkedAlt
  );
};

export default Icons;
