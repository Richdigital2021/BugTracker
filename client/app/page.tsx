"use client";

import type React from "react";

import { useState } from "react";
import {
  Bug,
  Plus,
  Trash2,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";

interface BugReport {
  id: number;
  title: string;
  description: string;
  status: "open" | "in-progress" | "resolved";
  createdAt: Date;
}

export default function BugTracker() {
  const [bugs, setBugs] = useState<BugReport[]>([
    {
      id: 1,
      title: "Login button unresponsive",
      description: "The Login button is not responsive when clicked.",
      status: "in-progress",
      createdAt: new Date("2024-01-15"),
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      const newBug: BugReport = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        status: "open",
        createdAt: new Date(),
      };
      setBugs([newBug, ...bugs]);
      setTitle("");
      setDescription("");
    }
  };

  const updateBugStatus = (
    id: number,
    status: "open" | "in-progress" | "resolved"
  ) => {
    setBugs(bugs.map((bug) => (bug.id === id ? { ...bug, status } : bug)));
  };

  const deleteBug = (id: number) => {
    setBugs(bugs.filter((bug) => bug.id !== id));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertCircle className="w-4 h-4" />;
      case "in-progress":
        return <Clock className="w-4 h-4" />;
      case "resolved":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "destructive";
      case "in-progress":
        return "default";
      case "resolved":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 relative">
          <div className="absolute top-0 right-4">
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full transition-colors duration-300">
              <Bug className="w-8 h-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">
              Bug Tracker
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg transition-colors duration-300">
            Track and manage software bugs efficiently
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bug Submission Form - Centralized */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm sticky top-8 transition-colors duration-300">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-xl text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  <Plus className="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
                  Report New Bug
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  Help us improve by reporting issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors duration-300"
                    >
                      Bug Title
                    </label>
                    <Input
                      id="title"
                      placeholder="Brief description of the bug"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="h-10 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors duration-300"
                    >
                      Description
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Detailed information about the bug"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[100px] resize-none bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 transition-colors duration-300"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Submit Bug
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Bug List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2 transition-colors duration-300">
                Bug Reports ({bugs.length})
              </h2>
              <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                Manage and track all reported bugs
              </p>
            </div>

            {bugs.length === 0 ? (
              <Card className="shadow-lg border bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transition-colors duration-300">
                <CardContent className="py-12 text-center">
                  <Bug className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4 transition-colors duration-300" />
                  <h3 className="text-xl font-medium text-slate-600 dark:text-slate-300 mb-2 transition-colors duration-300">
                    No bugs reported yet
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 transition-colors duration-300">
                    Submit your first bug report to get started
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {bugs.map((bug) => (
                  <Card
                    key={bug.id}
                    className="shadow-lg border bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-200 hover:scale-[1.01]"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <CardTitle className="text-lg text-slate-800 dark:text-slate-100 leading-tight transition-colors duration-300">
                            {bug.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge
                              variant={getStatusColor(bug.status) as any}
                              className="flex items-center gap-1 px-2 py-1 text-xs"
                            >
                              {getStatusIcon(bug.status)}
                              {bug.status.replace("-", " ").toUpperCase()}
                            </Badge>
                            <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300">
                              {bug.createdAt.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                        {bug.description}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <Select
                          value={bug.status}
                          onValueChange={(
                            value: "open" | "in-progress" | "resolved"
                          ) => updateBugStatus(bug.id, value)}
                        >
                          <SelectTrigger className="w-32 h-8 text-xs bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 transition-colors duration-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                            <SelectItem
                              value="open"
                              className="text-slate-900 dark:text-slate-100"
                            >
                              Open
                            </SelectItem>
                            <SelectItem
                              value="in-progress"
                              className="text-slate-900 dark:text-slate-100"
                            >
                              In Progress
                            </SelectItem>
                            <SelectItem
                              value="resolved"
                              className="text-slate-900 dark:text-slate-100"
                            >
                              Resolved
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteBug(bug.id)}
                          className="h-8 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800 transition-colors duration-300"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
