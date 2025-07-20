import React from "react";

export interface LayoutProps {
    children: React.ReactNode
}

export interface ChildProps {
    children: React.ReactNode,
    class?: string;
    key?: string;
}