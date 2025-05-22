const SUPABASE_URL = 'https://wyfysxlnsqkftxkximax.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZnlzeGxuc3FrZnR4a3hpbWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NzAyMzMsImV4cCI6MjA2MzI0NjIzM30.-Ridjxn8baGLT7lbC0vTfYvVR-0zH6gkbLaPvjapvPE';

const table = 'mascotas';
const API_URL = `${SUPABASE_URL}/rest/v1/${table}`;
const HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
};

const listaPets = () => {
  return fetch(`${API_URL}?select=nombre,especie,edad`, { headers: HEADERS })
    .then(res => {
      if (!res.ok) throw new Error('Error al obtener mascotas');
      return res.json();
    });
};

const crearPet = (nombre, especie, edad) => {
  const pet = {
    nombre,
    especie,
    edad,
  };
  return fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(pet),
  }).then(async res => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || 'Error al crear mascota');
    }
    return { success: true, message: 'Mascota creada con éxito' };
  });
};

const eliminarPet = id => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'DELETE',
    headers: HEADERS,
  }).then(res => {
    if (!res.ok) throw new Error('Error al eliminar mascota');
    return res.text();
  });
};

const detallePet = id => {
  return fetch(`${API_URL}?id=eq.${id}&select=nombre,especie,edad`, { headers: HEADERS })
    .then(res => {
      if (!res.ok) throw new Error('Error al obtener mascota');
      return res.json();
    })
    .then(data => data[0]);
};

const actualizarPet = (id, nombre, especie, edad) => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      ...HEADERS,
      'Prefer': 'return=representation',
    },
    body: JSON.stringify({ nombre, especie, edad }),
  }).then(res => {
    if (!res.ok) throw new Error('Error al actualizar mascota');
    return res.json();
  });
};

export const petService = {
  listaPets,
  crearPet,
  eliminarPet,
  detallePet,
  actualizarPet,
};