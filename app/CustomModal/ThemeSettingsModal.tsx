import {
  Modal as RModal,
  ModalProps,
  KeyboardAvoidingView,
  Platform,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";

type Props = ModalProps & {
  inOpen: boolean;
  withInput?: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function TModal({ inOpen, withInput, ...props }: Props) {
  const content = (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.setModalOpen(false)}
      className="flex-1 items-center justify-end  bg-zinc-900/70"
    >
      {props.children}
    </TouchableOpacity>
  );

  return (
    <RModal animationType="fade" transparent visible={inOpen} {...props}>
      {content}
    </RModal>
  );
}
