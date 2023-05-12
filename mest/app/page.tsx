import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 px-6 lg:px-8 bg-gray-100">
      <div className="mx-auto w-full max-w-md">
        <Image
          src="/images/logo.svg"
          alt="mest logo image"
          width={48}
          height={48}
          className="w-full mx-auto"
        />
        <h2 className="mt-6 text-center font-bold text-3xl tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* auth form */}
    </div>
  );
}
