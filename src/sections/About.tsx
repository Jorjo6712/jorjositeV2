export const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 mt-6 w-full">
      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-col justify-start items-end w-6/12">
          <div className="bg-primary text-primary bg-opacity-5 text-nowrap rounded-lg px-4"> AUG, 2021 </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="bg-secondary rounded-full p-1.5" />
          <span className="bg-accent p-0.5 h-52" />
          <div className="bg-secondary rounded-full p-1.5" />
        </div>
        <div className="flex flex-col justify-end items-start w-6/12">
          <div className="bg-primary text-primary bg-opacity-5 rounded-lg text-nowrap px-4"> JUN, 2022 </div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2">
        <div className="relative flex flex-col gap-[5px] justify-center items-center">
          <span className="bg-accent p-0.5 h-52" />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-col justify-start items-end w-6/12">
          <div className="bg-primary text-primary bg-opacity-5 rounded-lg text-nowrap px-4"> MAY, 2023 </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="bg-secondary rounded-full p-1.5" />
          <span className="bg-accent p-0.5 h-52" />
          <div className="bg-secondary rounded-full p-1.5" />
        </div>
        <div className="flex flex-col justify-end items-start w-6/12">
          <div className="bg-primary text-primary bg-opacity-5 rounded-lg text-nowrap px-4"> PRESENT </div>
        </div>
      </div>
    </div>
  )
}
