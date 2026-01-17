import { Button } from '@/components/ui/button'
import { CheckCircle, Send } from 'lucide-react'

interface SuccessMessageProps {
  onReset: () => void
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="text-center py-12">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-blue-900 mb-2">Quote Request Sent!</h3>
      <p className="text-slate-600 mb-6">We'll get back to you within 24 hours with a customized quote.</p>
      <Button
        onClick={onReset}
        className="bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold py-6 text-lg cursor-pointer"
      >
        <Send className="w-5 h-5 mr-2" />
        Request Another Quote
      </Button>
    </div>
  )
}
