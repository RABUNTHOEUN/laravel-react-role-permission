import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Show({ user }: { user: any }) {
    return (
        <AppLayout>
            <Head title="User Details" />

            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-semibold mb-4">User Details</h1>

                <div className="mb-4">
                    <strong>Name:</strong> {user.name}
                </div>

                <div className="mb-4">
                    <strong>Email:</strong> {user.email}
                </div>

                <Link href={route('users.index')}>
                    <Button>Back to List</Button>
                </Link>
            </div>
        </AppLayout>
    );
}
