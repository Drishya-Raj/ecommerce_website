import '../assets/css/index.scss';

const BannerPart = ({value,className}) =>{
    return(
       <p className={className}>
        {value}
       </p>
    )
}
export default BannerPart;