import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function useProtected() {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const protect = (callback) => {
        if (!session) {
            router.push("/login");
            return;
        }
        callback();
    };

    return { protect, session };
}