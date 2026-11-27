import { login } from "@/app/actions/auth";

export default function LoginPage() {
    // const [state, loginAction] = useActionState(login, undefined);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        action={login}
        className="w-full max-w-sm space-y-5 rounded-xl border bg-white p-8 shadow-sm"
      >
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-pink-600">
            Fuzzy Kids
          </p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            Admin login
          </h1>
        </div>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </span>
          <input
            name="email"
            type="email"
            autoComplete="username"
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-pink-600 px-4 py-2 font-medium text-white hover:bg-pink-700"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}