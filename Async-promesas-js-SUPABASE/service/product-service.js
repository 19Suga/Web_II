const SUPABASE_URL = 'https://wyfysxlnsqkftxkximax.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZnlzeGxuc3FrZnR4a3hpbWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NzAyMzMsImV4cCI6MjA2MzI0NjIzM30.-Ridjxn8baGLT7lbC0vTfYvVR-0zH6gkbLaPvjapvPE';

const table = 'productos';
const API_URL = `${SUPABASE_URL}/rest/v1/${table}`;
const HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
};

const listaProductos = () => {
  return fetch(`${API_URL}?select=*`, { headers: HEADERS }).then(res => {
    if (!res.ok) throw new Error('Error al obtener productos');
    return res.json();
  });
};

const crearProducto = (nombre, precio, descripcion) => {
  const producto = { nombre, precio: parseFloat(precio), descripcion };
  return fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(producto),
  }).then(async res => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || 'Error al crear producto');
    }
    return { message: 'Producto creado con éxito' };
  });
};

const eliminarProducto = id => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'DELETE',
    headers: HEADERS,
  }).then(res => {
    if (!res.ok) throw new Error('Error al eliminar producto');
    return res.text();
  });
};

const detalleProducto = id => {
  return fetch(`${API_URL}?id=eq.${id}`, { headers: HEADERS })
    .then(res => {
      if (!res.ok) throw new Error('Error al obtener producto');
      return res.json();
    })
    .then(data => data[0]);
};

const actualizarProducto = (id, nombre, precio, descripcion) => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      ...HEADERS,
      Prefer: 'return=representation',
    },
    body: JSON.stringify({ nombre, precio: parseFloat(precio), descripcion }),
  }).then(res => {
    if (!res.ok) throw new Error('Error al actualizar producto');
    return res.json();
  });
};

export const productService = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
