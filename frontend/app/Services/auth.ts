const API_URL = "http://127.0.0.1:8000/api";

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (!response.ok) {throw new Error(data.message);}
  return data;
}

export async function register(
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation,
    }),
  });

  const data = await response.json();
  if (!response.ok) {throw new Error(data.message);}
  return data;
}

export async function createObject(data: {
  title: string;
  description: string;
  type: string;
  location: string;
  date: string;
  image: File | null;

}) {
  const token = localStorage.getItem("token");
  const formData= new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("type", data.type);
  formData.append("location", data.location);
  formData.append("date", data.date);
   if (data.image) {
    formData.append("image", data.image);
  }
  
  const response = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return response.json();

}
//tous objets
export async function getItems(
  search = "",
  type = "",
  location = ""
) {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (type) params.append("type", type);
  if (location) params.append("location", location);
  const response = await fetch(`${API_URL}/items?${params.toString()}`
  );
if (!response.ok) {
  throw new Error("Erreur");
}
  return response.json();
}
//objet
export async function getItem(id: string | number) {
  const response = await fetch(`${API_URL}/items/${id}`);

  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`);
  }

  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`);
  }
  return response.json();
}

export async function updateItemStatus(
  id: number,
  status: "in_progress" | "resolved"
) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/items/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour du statut.");
  }
  return response.json();
}