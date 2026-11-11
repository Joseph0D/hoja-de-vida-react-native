import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="school" size={70} color="#2563eb" />
        <Text style={estilos.nombre}>Joseph Daniel Giraldo Moreno</Text>
        <Text style={estilos.subtitulo}>Formación Académica</Text>
      </View>

      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
        anio={2026}
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Técnico en Programación de Software"
        institucion="SENA"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Certificación en Excel Intermedio"
        institucion="SENA"
        anio={2026}
        enCurso={false}
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
