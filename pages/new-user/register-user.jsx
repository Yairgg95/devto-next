import { useState } from "react";
import { useForm } from "react-hook-form"
import { registerUser } from "@/lib/api"
import { useRouter } from "next/router";


export default function RegisterUser() {
    const {
        handleSubmit,
        register,
        formState : { errors },
        setError,
    } = useForm();

    const router = useRouter()

    async function onSubmit(data) {
        const { profilePic ,name, userName, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Las contraseñas no coinciden",
            });
            return;
        }
        try {
            await registerUser({ profilePic, name, userName, email, password});
            router.push("/login")
        } catch (error) {
            console.error('[register user error]',error)
        }
    }

    return (
        <main className="flex justify-center p-1 w-full min-h-dvh">
            <div className="border rounded flex flex-col justify-center w-full p-4 max-w-[580px] md:min-w-[580px] mt-9 mb-9">
                <h2 className="text-xl mb-12">Crea tu cuenta</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="mb-2">Imagen de perfil</p>
                    <input
                        className="border rounded w-full p-2 mb-2"
                        type="text"
                        {...register("profilePic")}
                    />
                    <p className="mb-2">Nombre <span className="text-red-500">*</span></p>
                    <input
                        className="border rounded w-full p-2 mb-2"
                        type="text"
                        {...register("name", {
                            required: { value: true, message: "El nombre es requerido" }
                        })}
                    />
                    <p className="mb-2">Nombre de usuario <span className="text-red-500">*</span></p>
                    <input
                        className="border rounded w-full p-2 mb-2"
                        type="text"
                        {...register("userName", {
                            required: { value: true, message: "El nombre de usuario es requerido" }
                        })}
                    />
                    <p className="mb-2">Correo electrónico <span className="text-red-500">*</span></p>
                    <input
                        className="border rounded w-full p-2 mb-2"
                        type="text"
                        {...register("email", {
                            required: { value: true, message: "El correo electrónico es requerido" }
                        })}
                    />
                    <p className="mb-2">Contraseña <span className="text-red-500">*</span></p>
                    <input
                        className="border rounded w-full p-2 mb-2"
                        type="password"
                        {...register("password", {
                            required: { value: true, message: "La contraseña es requerida" }
                        })}
                    />
                    <p className="mb-2">Confirmación de contraseña <span className="text-red-500">*</span></p>
                    <input
                        className="border rounded w-full p-2 mb-8"
                        type="password"
                        {...register("confirmPassword", {
                            required: { value: true, message: "La confirmación de la contraseña es requerida" }
                        })}
                    />
                    <button
                        className="bg-[#3B49DF] text-white hover:bg-[#2F3AB2] w-[105px] p-2 rounded"
                        type="submit"
                    >
                        Inscribirse
                    </button>
                </form>
            </div>
        </main>
    )
}