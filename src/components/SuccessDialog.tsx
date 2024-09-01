import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface SuccessDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onAction: () => void;
    title: string;
    description: string;
    buttonText: string;
}

// Reusable component to display success dialogs throughout the application

export function SuccessDialog({ isOpen, onClose, onAction, title, description, buttonText }: SuccessDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onAction}>{buttonText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
