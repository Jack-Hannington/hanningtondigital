export const metadata = {
    title: 'Latest tips and articles',
    description: 'Information on XYZ to get your business looking professional and ready to be found online',
  } 

  export default function Posts(){
    return (
    <div className="flex">
        <h1 className="inline-block text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200">
            Latest posts
        </h1>
    </div>
    )
  }