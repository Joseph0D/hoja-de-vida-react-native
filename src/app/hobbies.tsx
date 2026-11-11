import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="heart" size={70} color="#2563eb" />
        <Text style={estilos.nombre}>Joseph Daniel Giraldo Moreno</Text>
        <Text style={estilos.subtitulo}>Intereses y Pasatiempos</Text>
      </View>

      <TarjetaHobby
        titulo="Desarrollo y Laboratorios Tech"
        descripcion="Construcción de proyectos web y redes locales."
        nombreIcono="code-slash"
        onPress={() =>
          Alert.alert(
            "Desarrollo y Laboratorios Tech",
            "Me gusta experimentar con contenedores Docker, filtrado DNS local y nuevas librerías de JavaScript y Python.",
          )
        }
      />

      <TarjetaHobby
        titulo="Conducción y Viajes"
        descripcion="Recorridos por carretera y conocer nuevos destinos."
        nombreIcono="car-sport"
        onPress={() =>
          Alert.alert(
            "Conducción y Viajes",
            "Disfruto viajar por carretera, explorar paisajes naturales y planear rutas dentro y fuera del país.",
          )
        }
      />

      <TarjetaHobby
        titulo="Hardware y Audio"
        descripcion="Análisis de dispositivos móviles y tecnología de sonido."
        nombreIcono="headset"
        onPress={() =>
          Alert.alert(
            "Hardware y Audio",
            "Me interesa comparar especificaciones de smartphones, periféricos inalámbricos y equipos de audio.",
          )
        }
      />

      <TarjetaHobby
        titulo="Eventos de Tecnología"
        descripcion="Asistencia a ferias de innovación y software."
        nombreIcono="rocket"
        onPress={() =>
          Alert.alert(
            "Eventos de Tecnología",
            "Participo en ferias y charlas sobre ecosistemas digitales, desarrollo de software y tendencias TIC en Bogotá.",
          )
        }
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
