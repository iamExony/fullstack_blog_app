import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className='text-4xl text-white font-bold mb-4'>Browse</h2>
        <Link href={'/blogs'} className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded">Explore</Link>
        </div>    
    </div>
  );
}
