import { LuPlay } from "react-icons/lu";

export interface IQuickPickCardProps {
  image: string;
  title: string;
  info: [string];
}
export default function QuickPickCard({
  record,
}: {
  record: IQuickPickCardProps;
}) {
  return (
    <div className="relative flex gap-4 p-2 rounded-lg hover:bg-white/10 transition group cursor-pointer">
      <div className="group relative">
        <img
          src={record.image}
          alt={record.title}
          className="w-12 h-12 object-cover rounded-md shrink-0 transition-all duration-300 
               group-hover:brightness-75"
        />
        <div
          className="absolute inset-0 rounded-md bg-black/70 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 
                  flex items-center justify-center"
        >
          <LuPlay className="text-2xl text-white drop-shadow-2xl translate-y-1" />
        </div>
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <p className="font-medium text-white truncate">{record.title}</p>

        <p className="text-sm text-gray-400 truncate">
          {record.info.map((item, index) => (
            <span key={index}>
              {item}
              {index < record.info.length - 1 && (
                <span className="mx-1 select-none">•</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
