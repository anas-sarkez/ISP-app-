import {
  Modal as RModal,
  ModalProps,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";

type Props = ModalProps & {
  inOpen: boolean;
  withInput?: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function PModal({ inOpen, withInput, ...props }: Props) {
  const content = (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.setModalOpen(false)}
      className="flex-1 z-10 items-center justify-end  "
    >
      {props.children}
    </TouchableOpacity>
  );

  return (
    <RModal animationType="slide" transparent visible={inOpen} {...props}>
      {content}
    </RModal>
  );
}
