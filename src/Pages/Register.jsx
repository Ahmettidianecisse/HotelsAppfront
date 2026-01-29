import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 📝 ici ton API register
    // après succès :
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-700">
      <div className="w-[380px] bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-lg font-semibold text-center mb-6">
          Inscription Admin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border rounded px-3 py-2"
          />

          <button className="w-full bg-yellow-500 text-white py-2 rounded">
            S’inscrire
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Déjà un compte ?{" "}
          <Link
            to="/login"
            className="text-yellow-500 hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
