import { SignInForm } from "@/components/SignInForm";
import greenHubLogo from "@/assets/images/green-hub.svg"

import Link from "next/link";
import Image from 'next/image'

export default function Login() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <Image
                        alt="Your Company"
                        src={greenHubLogo}
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <SignInForm />

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/register" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
