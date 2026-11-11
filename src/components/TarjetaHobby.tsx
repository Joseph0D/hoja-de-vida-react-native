import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  titulo: string;
  descripcion: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ titulo, descripcion, nombreIcono, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={estilos.tarjeta}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={estilos.iconoContenedor}>
        <Ionicons name={nombreIcono} size={28} color="#2563eb" />
      </View>
      <View style={estilos.textoContenedor}>
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
        <Text style={estilos.indicador}>Toca para ver más detalles</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    elevation: 1,
    gap: 14,
  },
  iconoContenedor: {
    backgroundColor: "#eff6ff",
    padding: 12,
    borderRadius: 10,
  },
  textoContenedor: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  descripcion: {
    fontSize: 13,
    color: "#475569",
    marginTop: 2,
  },
  indicador: {
    fontSize: 11,
    color: "#2563eb",
    fontWeight: "600",
    marginTop: 6,
  },
});
