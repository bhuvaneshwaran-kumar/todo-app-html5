import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react";
import { Link } from "react-router-dom";

interface registerFormData {
  email: string;
  password: string;
}
interface registerFormErrors {
  email?: string;
  password?: string;
}

const RegisterPage = () => {
    const [formData, setFormData] = useState<registerFormData>({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState<registerFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if(formErrors[name as keyof registerFormErrors]) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: undefined,
            }));
        }
    }

    function validateForm():boolean {
        const newErrors: registerFormErrors = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setFormErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        // eslint-disable-next-line no-empty
        try {
        // eslint-disable-next-line no-empty
        } catch (error) {
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md p-6">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full p-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full p-2 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
                            />
                            {formErrors.password && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                            )}
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="mb-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                            {isSubmitting ? "Signing up..." : "Register"}
                        </Button>
                        <div>
                            Already have an account? <Link to={"/login"} className="text-blue-500 hover:underline cursor-pointer">Login</Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default RegisterPage;