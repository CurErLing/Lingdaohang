import React from 'react';
import { 
  Bot, Sparkles, Brain, FileText, Link, Atom, Wind, Zap, 
  Triangle, Database, Dribbble as Basketball, Award, Image, PenTool,
  Code, Command, Globe, Ghost, FileVideo, Upload, ShoppingCart, Download,
  Server, Mail, Phone, Monitor, Wifi, Gamepad2, Camera, Shield, Book,
  Music, Utensils, Keyboard, Truck, Calculator, Users, Smartphone,
  TrendingUp, Clock, BarChart, Building2, Rocket, Palette, Dna, History,
  Coffee, Smile, Layers, Cpu, Search, Lock, Eye, Map, Sun, Moon,
  Headphones, Mic, Video, Aperture, Compass, Anchor, Briefcase, Gift,
  GraduationCap, Joystick, Stethoscope, Microscope, Languages, Scroll,
  Library, FlaskConical, Gavel, Radio, Tv, Cloud, HardDrive, RefreshCw,
  Layout, Type, Box, Home, Flag, Bomb, Speaker, Github, Terminal, 
  Code2, DownloadCloud, ImageIcon, Scissors, Droplet
} from 'lucide-react';

const icons: Record<string, React.FC<any>> = {
  Bot, Sparkles, Brain, FileText, Link, Atom, Wind, Zap, 
  Triangle, Database, Basketball, Award, Image, PenTool,
  Code, Command, Globe, Ghost, FileVideo, Upload, ShoppingCart, Download,
  Server, Mail, Phone, Monitor, Wifi, Gamepad2, Camera, Shield, Book,
  Music, Utensils, Keyboard, Truck, Calculator, Users, Smartphone,
  TrendingUp, Clock, BarChart, Building2, Rocket, Palette, Dna, History,
  Coffee, Smile, Layers, Cpu, Search, Lock, Eye, Map, Sun, Moon,
  Headphones, Mic, Video, Aperture, Compass, Anchor, Briefcase, Gift,
  GraduationCap, Joystick, Stethoscope, Microscope, Languages, Scroll,
  Library, FlaskConical, Gavel, Radio, Tv, Cloud, HardDrive, RefreshCw,
  Layout, Type, Box, Home, Flag, Bomb, Speaker, Github, Terminal,
  Code2, DownloadCloud, ImageIcon, Scissors, Droplet
};

interface IconMapProps {
  name: string;
  className?: string;
}

export const IconMap: React.FC<IconMapProps> = ({ name, className }) => {
  const IconComponent = icons[name] || icons.Globe;
  return <IconComponent className={className} />;
};