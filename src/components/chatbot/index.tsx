"use client";
import { useChatBot } from '@/hooks/chatbot/use-chatbot';
import React from 'react'

const AIChatBot = () => {
    const {
        onOpenChatBot,
        botOpened,
        onChats,
        register,
        onStartChatting,
        onAiTyping,
        messageWindowRef,
        currentBot,
        loading,
        onRealTime,
        setOnChats,
        errors,
    } = useChatBot()
  return (
    <div>
          AIChatBot
    </div>
  )
}

export default AIChatBot
