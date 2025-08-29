import styles from "../styles";

const NewFeatures = ({imgUrl, title, subtitle}: {imgUrl: string, title: string, subtitle: string}) => (
  <div className="flex-1 flex flex-col sm:max-w-[25px] min-w-[220px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white whitespace-nowrap">Title {title}</h1>
      <p className="flex-1 mt-[15px] font-normal text-[16px] text-[#b0b0b0] leading-[28px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
