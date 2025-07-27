import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

export function ProfileEditDialog({ isOpen, onClose, user }: ProfileEditDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState(user);
  const [newSpecialty, setNewSpecialty] = useState("");
  const [newDeliveryArea, setNewDeliveryArea] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBusinessHoursChange = (day: string, hours: string) => {
    setFormData(prev => ({
      ...prev,
      businessHours: { ...prev.businessHours, [day]: hours }
    }));
  };

  const addSpecialty = () => {
    if (newSpecialty.trim() && !formData.specialties?.includes(newSpecialty.trim())) {
      setFormData(prev => ({
        ...prev,
        specialties: [...(prev.specialties || []), newSpecialty.trim()]
      }));
      setNewSpecialty("");
    }
  };

  const removeSpecialty = (specialty: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties?.filter(s => s !== specialty) || []
    }));
  };

  const addDeliveryArea = () => {
    if (newDeliveryArea.trim() && !formData.deliveryAreas?.includes(newDeliveryArea.trim())) {
      setFormData(prev => ({
        ...prev,
        deliveryAreas: [...(prev.deliveryAreas || []), newDeliveryArea.trim()]
      }));
      setNewDeliveryArea("");
    }
  };

  const removeDeliveryArea = (area: string) => {
    setFormData(prev => ({
      ...prev,
      deliveryAreas: prev.deliveryAreas?.filter(a => a !== area) || []
    }));
  };

  const handleSave = () => {
    // In a real app, this would make an API call to update the profile
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your {user.type} profile information
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Business Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="owner">Owner Name</Label>
                  <Input
                    id="owner"
                    value={formData.owner}
                    onChange={(e) => handleInputChange("owner", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vegetables & Fruits">Vegetables & Fruits</SelectItem>
                      <SelectItem value="Dairy & Eggs">Dairy & Eggs</SelectItem>
                      <SelectItem value="Meat & Poultry">Meat & Poultry</SelectItem>
                      <SelectItem value="Grains & Cereals">Grains & Cereals</SelectItem>
                      <SelectItem value="Spices & Herbs">Spices & Herbs</SelectItem>
                      <SelectItem value="Bakery">Bakery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="fullAddress">Full Address</Label>
                <Textarea
                  id="fullAddress"
                  value={formData.fullAddress}
                  onChange={(e) => handleInputChange("fullAddress", e.target.value)}
                />
              </div>

              {user.type === "supplier" && (
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your business..."
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supplier-specific fields */}
          {user.type === "supplier" && (
            <>
              {/* Business Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="established">Established Year</Label>
                      <Input
                        id="established"
                        value={formData.established}
                        onChange={(e) => handleInputChange("established", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Input
                        id="employees"
                        value={formData.employees}
                        onChange={(e) => handleInputChange("employees", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="minimumOrder">Minimum Order</Label>
                      <Input
                        id="minimumOrder"
                        value={formData.minimumOrder}
                        onChange={(e) => handleInputChange("minimumOrder", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryTime">Delivery Time</Label>
                      <Input
                        id="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={(e) => handleInputChange("deliveryTime", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card>
                <CardHeader>
                  <CardTitle>Specialties</CardTitle>
                  <CardDescription>Add your business specialties</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add specialty..."
                      value={newSpecialty}
                      onChange={(e) => setNewSpecialty(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addSpecialty()}
                    />
                    <Button onClick={addSpecialty} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.specialties?.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="gap-1">
                        {specialty}
                        <X 
                          className="w-3 h-3 cursor-pointer" 
                          onClick={() => removeSpecialty(specialty)}
                        />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {formData.businessHours && Object.entries(formData.businessHours).map(([day, hours]) => (
                    <div key={day} className="flex items-center gap-4">
                      <Label className="w-20 capitalize">{day}</Label>
                      <Input
                        value={hours as string}
                        onChange={(e) => handleBusinessHoursChange(day, e.target.value)}
                        placeholder="e.g., 6:00 AM - 8:00 PM"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Delivery Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Areas</CardTitle>
                  <CardDescription>Areas where you provide delivery</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add delivery area..."
                      value={newDeliveryArea}
                      onChange={(e) => setNewDeliveryArea(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addDeliveryArea()}
                    />
                    <Button onClick={addDeliveryArea} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.deliveryAreas?.map((area, index) => (
                      <Badge key={index} variant="outline" className="gap-1">
                        {area}
                        <X 
                          className="w-3 h-3 cursor-pointer" 
                          onClick={() => removeDeliveryArea(area)}
                        />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}