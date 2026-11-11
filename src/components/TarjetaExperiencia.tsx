import { StyleSheet, Text, View } from "react-native";

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

const TarjetaExperiencia = ({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) => {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.cargo}>{cargo}</Text>
      <Text style={estilos.empresa}>{empresa}</Text>
      <Text style={estilos.periodo}>{periodo}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
};

export default TarjetaExperiencia;

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    elevation: 1,
  },
  cargo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  empresa: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
    marginTop: 2,
  },
  periodo: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 19,
  },
});
