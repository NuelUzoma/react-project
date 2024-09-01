import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input'
import { Button } from './ui/button';
import { signup } from '@/services/UserService';

// Signup success prop
interface SignupFormProps {
    onSignupSuccess: () => void;
}

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be atlest two characters',
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    })
});

// The signup form
export function SignupForm ({ onSignupSuccess }: SignupFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Define the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    // The submit handler
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setError(null);

        // Handle successful signup
        try {
            const response = await signup(values);
            console.log(`Signup successful: ${response}`);
            onSignupSuccess(); // Success handler
        } catch (error) {
            console.error(`Signup failed: ${error}`);
            setError('Signup failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    // The form
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your name here
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="johndoe@example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your email here
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder="********" {...field} />
                            </FormControl>
                            <FormDescription>
                                Password must be 8 characters long
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {error && <p className='text-red-500'>{error}</p>}
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Signing up...' : 'Signup'}
                </Button>
            </form>
        </Form>
    )
}