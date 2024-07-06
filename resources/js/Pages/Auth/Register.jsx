import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Register() {
    const { csrf_token } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        password: "",
        password_confirmation: "",
        _token: csrf_token,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <input type="hidden" name="_token" value={data._token} />

                <div>
                    <InputLabel htmlFor="first_name" value="First Name" />
                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="first_name"
                        isFocused={true}
                        onChange={(e) => setData("first_name", e.target.value)}
                        required
                    />
                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <br></br>

                <div>
                    <InputLabel htmlFor="last_name" value="Last Name" />
                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="last_name"
                        isFocused={false} // Ensure only one field has `isFocused` true
                        onChange={(e) => setData("last_name", e.target.value)}
                        required
                    />
                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="contact_number" value="Contact Number" />
                    <TextInput
                        id="contact_number"
                        type="text"
                        name="contact_number"
                        value={data.contact_number}
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        onChange={(e) => setData("contact_number", e.target.value)}
                        required
                    />
                    <InputError message={errors.contact_number} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password_confirmation", e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>
                    <PrimaryButton type="submit" className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
