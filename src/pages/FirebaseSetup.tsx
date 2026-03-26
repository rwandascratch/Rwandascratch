import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Shield, Globe } from 'lucide-react';

export default function FirebaseSetup() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Firebase Setup Required</h1>
          <p className="text-xl text-muted-foreground">
            Complete these steps to activate your Firebase authentication and content management system
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Step 1: Create Firebase Project
              </CardTitle>
              <CardDescription>
                Set up a new Firebase project for your website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firebase Console</a></li>
                <li>Click "Create a project"</li>
                <li>Enter your project name (e.g., "neoscratch-website")</li>
                <li>Enable Google Analytics (optional)</li>
                <li>Click "Create project"</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Step 2: Enable Authentication
              </CardTitle>
              <CardDescription>
                Configure Firebase Authentication for email/password and Google sign-in
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>In your Firebase console, go to "Authentication"</li>
                <li>Click "Get started"</li>
                <li>Go to "Sign-in method" tab</li>
                <li>Enable "Email/Password" provider</li>
                <li>Enable "Google" provider and configure</li>
                <li>Add your domain to authorized domains</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Step 3: Setup Firestore Database
              </CardTitle>
              <CardDescription>
                Create the database for content management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to "Firestore Database"</li>
                <li>Click "Create database"</li>
                <li>Start in "Test mode" (we'll configure rules later)</li>
                <li>Select your preferred location</li>
                <li>Click "Done"</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Step 4: Get Configuration Keys
              </CardTitle>
              <CardDescription>
                Copy your Firebase configuration to the website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to Project Settings (gear icon)</li>
                <li>Scroll down to "Your apps"</li>
                <li>Click "Web app" icon (&lt;/&gt;)</li>
                <li>Register your app with a nickname</li>
                <li>Copy the config object</li>
                <li>Replace the values in <code>src/lib/firebase.ts</code></li>
              </ol>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Example Configuration:</h4>
                <pre className="text-xs overflow-x-auto">
{`const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 5: Create Admin User</CardTitle>
              <CardDescription>
                Add your first admin user to the system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                After configuration, you'll need to create a user document in Firestore:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to Firestore Database</li>
                <li>Create a collection called "users"</li>
                <li>Add a document with your user ID</li>
                <li>Include fields: email, displayName, role: "admin", isActive: true</li>
              </ol>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="mt-8">
              Configuration Complete? Test Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}