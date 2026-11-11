import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={70} color="#2563eb" />
        <Text style={estilos.nombre}>Joseph Daniel Giraldo Moreno</Text>
        <Text style={estilos.subtitulo}>Experiencia y Proyectos</Text>
      </View>

      <TarjetaExperiencia
        cargo="Desarrollador Full-Stack (Proyecto Formativo)"
        empresa="SENA - Centro CGMLTI"
        periodo="2026 - Actualidad"
        descripcion="Diseño y desarrollo de aplicaciones web utilizando React, Vite, Node.js, Express y gestión de bases de datos relacionales en MariaDB/MySQL."
      />

      <TarjetaExperiencia
        cargo="Desarrollador de Automatización y Dashboards"
        empresa="Proyectos Académicos y Freelance"
        periodo="2026"
        descripcion="Creación de scripts de automatización con macros en Excel y tableros interactivos para el control de asistencia y análisis de ventas."
      />

      <TarjetaExperiencia
        cargo="Administrador de Entornos Locales y Redes"
        empresa="Laboratorio Personal / Prácticas Técnicas"
        periodo="2025 - 2026"
        descripcion="Despliegue de contenedores con Docker y WSL2, configuración de filtrado DNS local con AdGuard Home y administración de bases de datos MongoDB."
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 16 },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 8,
    textAlign: "center",
  },
  subtitulo: { fontSize: 15, color: "#2563eb", fontWeight: "600" },
});
